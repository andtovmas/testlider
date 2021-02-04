describe('Yandex', () => {


    it('Login_yandex', () => {

        cy.visit('https://passport.yandex.ru/')

        cy.xpath('//*[@id="passp-field-login"]').type('quality988')
        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div[2]/div[3]/div/div/div/div[1]/form/div[3]/button').click()
      
       cy.xpath('//*[@id="passp-field-passwd"]').type('yandex@7778')
       cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div[2]/div[3]/div/div/div/form/div[3]/button').click()
       cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div/div/a[1]/div').click()
       cy.wait(2000)

   

       cy.get('#root > div > div.dheader > div.dheader-user > div > div > div > div > ul > ul > li:nth-child(6) > a').contains('Выйти').click({force:true})
        
        
        
        
        

    

       







    })


})