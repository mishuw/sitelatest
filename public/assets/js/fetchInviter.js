const inviteBtn = document.querySelector('.invite');
fetch("https://discordapp.com/api/v6/invite/212?with_counts=true", {
        method: 'GET',
        headers: {
                  'Content-Type': 'application/json'
                 },
}).then(response => {
        response.json().then(data => {
            console.log(data)
            document.querySelector(".icon").src = 'https://cdn.discordapp.com/icons/' + data.guild.id + '/' + data.guild.icon;
            document.querySelector('.name').innerText = data.guild.name.length > 14 ? data.guild.name.substring(0, 14) + "..." : data.guild.name;
            document.querySelector(".members").innerText = data.approximate_presence_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' Online'
            document.querySelector(".topmembers").innerText = data.approximate_member_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' Members'
            inviteBtn.addEventListener('click', () =>{
                document.querySelector('.invite').innerText = 'Joined'
                window.open('https://discord.com/invite'+data.code, '_BLANK')
            })
        })
    }).catch(error => {
        console.log('Discord API Rate Limited')
        document.querySelector('.name').innerText = 'Rate Limit'
            inviteBtn.addEventListener('click', () =>{
                document.querySelector('.invite').innerText = 'Joined'
                window.open('https://discord.com/invite/212', '_BLANK')
            })
    })
