describe('Test Sample Login Register APK', () => {
    it('Apps opened', async() => {
        const greeting_text = await $('//android.widget.TextView[@content-desc="GreetingText"]')
        expect(greeting_text).toExist()
        expect(greeting_text).toBeDisplayed()
    })

    it('User click Roti & Kue', async() => {
        const roti_kue = await $('(//android.view.ViewGroup[@content-desc="CategoryButton"])[3]/android.widget.ImageView')
        await (roti_kue).click()
    })

    it('User choose Menu Item', async() => {
        const menu_item = await $('(//android.view.ViewGroup[@content-desc="MenuItem"])[1]')
        await (menu_item).click()
    })

    it('User click button Tambah ke keranjang', async() => {
        const tambah_ke_keranjang = await $('//android.view.ViewGroup[@content-desc="SubmitButton"]')
        await (tambah_ke_keranjang).click()
    })

    it('User click button Tambahkan', async() => {
        const tambahkan = await $('//android.view.ViewGroup[@content-desc="SubmitButton"]')
        await (tambahkan).click()
    })

    it('User click button order', async() => {
        const order = await $('//android.view.ViewGroup[@content-desc="FAB"]')
        await (order).click()
    })

    it('User choose Metode Pengambilan - Dikirim', async() => {
        const metode_pengambilan = await $('//android.view.ViewGroup[@content-desc="RefreshControl"]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup[2]')
        await (metode_pengambilan).click()
    })

    it('User choose Metode Pengiriman', async() => {
        const metode_pengiriman = await $('//android.view.ViewGroup[@content-desc="DeliveryMethodButton"]')
        await (metode_pengiriman).click()
    })

    it('User choose Jenis Metode Pengiriman - Gosend Instant', async() => {
        const jenis_metode_pengiriman = await $('(//android.view.ViewGroup[@content-desc="DeliveryMethodButton"])[1]')
        await (jenis_metode_pengiriman).click()
    })

    it('User click button Pilih Pembayaran', async() => {
        const pilih_pembayaran = await $('//android.view.ViewGroup[@content-desc="SubmitOrderButton"]')
        await (pilih_pembayaran).click()
    })

    it('User choose Jenis Metode Pembayaran - Shopee', async() => {
        const jenis_metode_pembayaran = await $('//android.view.ViewGroup[@content-desc="SubmitOrderButton"]')
        await (jenis_metode_pembayaran).click()
    })
})