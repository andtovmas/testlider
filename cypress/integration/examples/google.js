

describe('Google', () => {


    it('Google-Search', () => {

        cy.visit('https://www.google.com/')

        cy.get('.gLFyf').type('купить кофемашину bork c804')
        cy.xpath('//*[@id="tsf"]/div[2]/div[1]/div[3]/center/input[1]').click()
      
        cy.xpath('/html/body/div[7]/div[2]/div[9]/div[2]/div/div[2]/div[2]/div/div/div[1]/div/div[1]/a').should('have.attr','href').and( 'include','https://market.yandex.ru/',)
        cy.xpath('/html/body/div[7]/div[2]/div[9]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/a').should('have.attr','href').and( 'include','https://www.bork.ru/')
        cy.xpath('/html/body/div[7]/div[2]/div[9]/div[2]/div/div[2]/div[2]/div/div/div[3]/div/div[1]/a').should('have.attr','href').and( 'include','https://www.mvideo.ru/')
        cy.xpath('/html/body/div[7]/div[2]/div[9]/div[2]/div/div[2]/div[2]/div/div/div[4]/div/div[1]/a').should('have.attr','href').and( 'include','https://www.hausdorf.ru/')
        cy.xpath('/html/body/div[7]/div[2]/div[9]/div[2]/div/div[2]/div[2]/div/div/div[5]/div/div[1]/a').should('have.attr','href').and( 'include','https://www.bork.kz')
        
        cy.xpath('/html/body/div[7]/div[2]/div[9]/div[2]/div/div[2]/div[2]/div/div/div[6]/div/div[1]/a').should('have.attr','href').and( 'include','https://otziv-otziv.ru/')
        
        cy.xpath('/html/body/div[7]/div[2]/div[9]/div[2]/div/div[2]/div[2]/div/div/div[7]/div/div[1]/a').should('have.attr','href').and( 'include','https://www.e-katalog.ru/')
        cy.xpath('/html/body/div[7]/div[2]/div[9]/div[2]/div/div[2]/div[2]/div/div/div[8]/div/div[1]/a').should('have.attr','href').and( 'include','https://m.fotosklad.ru/')
        cy.xpath('/html/body/div[7]/div[2]/div[9]/div[2]/div/div[2]/div[2]/div/div/div[9]/div/div[1]/a').should('have.attr','href').and( 'include','https://www.ozon.ru/')
        cy.xpath('/html/body/div[7]/div[2]/div[9]/div[2]/div/div[2]/div[2]/div/div/div[10]/div/div[1]/a').should('have.attr','href').and( 'include','https://catalog.onliner.by/')
        cy.xpath('/html/body/div[7]/div[2]/div[9]/div[2]/div/div[5]/div[2]/span[1]/div/table/tbody/tr/td[3]/a').click()
        cy.xpath('/html/body/div[7]/div[2]/div[9]/div[2]/div/div[2]/div[2]/div/div/div[1]/div/div[1]/a').should('have.attr','href').and( 'include','https://101kofemashina.ru')
        
        
        
        
        
        
        

    

       







    })


})