describe('Api Test', () => {



    it('Get' ,() => {
    
      cy.request({
    
        method:"GET",
        url:'https://reqres.in/api/single_user',
    
    
    
    
      }).then (function(response){
    
             expect(response).property('status').to.equal(200)
    
           
             expect(response.body).to.have.property("page",1,"per_page","name","cerulean",)



    
  })





})

})
