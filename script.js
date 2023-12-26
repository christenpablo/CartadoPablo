getBirthdayMessage();

function getBirthdayMessage() {
    let url = window.location.href;
    let regexName = new RegExp("name" + "(=([^&#]*))");
    let resultsName = regexName.exec(url);
    let regexSeg = new RegExp("seg" + "(=([^&#]*))");
    let resultsSeg = regexSeg.exec(url);

    if (resultsName == null) {
        birthdayName = "Liliana";
    } else {
        birthdayName = decodeURIComponent(resultsName[2]);
    }

    if (resultsSeg == null) {
        birthdaySeg = "general";
    } else {
        birthdaySeg = decodeURIComponent(resultsSeg[2]);
    }

    if (birthdaySeg == "fundraisers") {
        document.getElementById('letter').innerHTML = "<div class='center-letter animate-reveal animate-first'> <h1>Happy Birthday Liliana!</h1><br><p style='margin: 0 10px; line-height:160%;'>Feliz Aniversario Amorzinho!<br><br> Quero te desejar mais anos de vida, que Allah te abencoe hoje e sempre, thank you for being someone very special na minha vida ao longo desses todos meses. Mais saude, felicidades na tua vida e pelo o que tu vais apanhar pela frente. Mando os meus parabens desta forma porque I just wanted to be special de todos da forma que es especial for me. Nao tenho muitas palavras, mas so quero que aproveites o teu dia da melhor forma possivel. TE AMO LILIANA. HAPPY BIRTHDAY🎉🎂❤️🥂</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='margin-top: 15px; font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'>Start Fundraising</a></div>"
    } else {
        document.getElementById('letter').innerHTML = "<div><div id='center-letter' class='center-letter animate-reveal animate-first'> <h1>Happy Birthday!</h1><br><p style='margin: 0 10px;'>Feliz Aniversario Amorzinho!<br><br> Quero te desejar mais anos de vida, que Allah te abencoe hoje e sempre, thank you for being someone very special na minha vida ao longo desses todos meses. Mais saude, felicidades na tua vida e pelo o que tu vais apanhar pela frente. Mando os meus parabens desta forma porque I just wanted to be special de todos da forma que es especial for me. Nao tenho muitas palavras, mas so quero que aproveites o teu dia da melhor forma possivel. TE AMO LILIANA. HAPPY BIRTHDAY🎉🎂❤️🥂</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'>Start Fundraising</a></div></div>"
    }
}