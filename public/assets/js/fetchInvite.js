var inviter =
    inviter ||
    (function () {
        var d = {};
        return {
            init: function (i) {
                (i.inviteCode = void 0 !== i.inviteCode && i.inviteCode),
                    (i.title = void 0 !== i.title ? i.title : ""),
                    (i.texts = void 0 !== i.texts ? i.texts : "SUNUCUYA KATILMAK İÇİN BİR DAVET ALDIN"),
                    (i.joinText = void 0 !== i.joinText ? i.joinText : "KATIL"),
                    (i.joinedText = void 0 !== i.joinedText ? i.joinedText : "KATIL"),
                    (i.width = void 0 !== i.width ? i.width : 400),
                    (i.miniMode = void 0 !== i.miniMode && i.miniMode),
                    (i.hideIntro = void 0 !== i.hideIntro && i.hideIntro),
                    (i.targetElement = void 0 !== i.targetElement ? i.targetElement : ".ınviteBody"),
                    (d.inviteCode = i.inviteCode),
                    (d.title = i.title),
                    (d.texts = i.texts),
                    (d.joinText = i.joinText),
                    (d.joinedText = i.joinedText),
                    (d.miniMode = i.miniMode),
                    (d.hideIntro = i.hideIntro),
                    (d.width = i.width),
                    (d.targetElement = i.targetElement);
            },
            render: function () {
                var i;
                function e() {
                    var i, o;
                    (discordCode = d.inviteCode),
                        discordCode && "" != discordCode
                            ? (d.miniMode ? (d.width = "auto") : "number" == typeof d.width && (d.width = d.width + "px"),
                              $.ajax({
                                  url: "https://discordapp.com/api/v6/invite/" + discordCode + "?with_counts=true",
                                  success: function (i) {
                                      i.code;
                                      var n = i.guild.name,
                                          i = "https://cdn.discordapp.com/icons/" + i.guild.id + "/" + i.guild.icon;
                                          $(".sName").html(n),
                                          $(".serverImg").css("background-image", "url(" + i + ")"),
                                          $(".sName").text(n),
                                          $(".dcURL").click(function () {
                                              $(".forward").html(o).attr("class", "forward-clicked"), (url = "https://discordapp.com/invite/" + d.inviteCode), window.open(url, "_blank");
                                          }),
                                          $(".hid").show()
                                  },
                                  error: function (i) {
                                      $(".ınvite").css("width", "auto");
                                      var e = null;
                                      void 0 !== i.responseJSON ? ($(".buttonText").html("Geçersiz Davet"), $(".dcInfo").remove()) : ($(".dcdta").remove(), (e = !0)),
                                          e ? $(".texts").html("Hata: URL Hatası.") : $(".texts").html("Bilinmeyen Hata."),
                                          $(".texts").css("margin", 0).show();
                                  },
                              }))
                            : $(d.targetElement).html("Hata: Davet kodu çözümlenemiyor.").attr("class", "dcErr").css("display", "inline-block");
                }
                window.jQuery
                    ? e()
                    : (((i = document.createElement("script")).type = "text/javascript"),
                      (i.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"),
                      document.head.appendChild(i),
                      (i.onload = function () {
                          e();
                      }));
            },
        };
    })();
inviter.init({ inviteCode: "212" }), inviter.render();