import * as data from "../helpers/default_data.json"


describe('Покупка аватара', function () {


           it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.ru'); //Зайти на сайт
        cy.wait(2000);
        cy.get('#k_email').type(data.login_tanya); //ввод логина
        cy.get('#k_password').type(data.password_tanya); //ввод пароля
        cy.get('.MuiButton-root').click(); //нажать войти
        cy.wait(2000);
        cy.get('.header_card_trainer').click(); //провалиться в карточку тренера
        cy.get('[data-qa="shop"]').click(); //нажать на смену аватара
        cy.get('.available > button').first().click();//поиск первого доступного аватара
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4627100101654724'); //ввели номер карты
        cy.get(':nth-child(1) > .style_1_base_input').type('0528'); //ввели срок действия карты
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); //ввели CVV
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('User name'); //ввели имя держателя карты
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); //
        cy.get('.style_1_base_input').type('56456'); //ввели пароль из смс-ки
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();// нажимаем оплатить
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно');//проверяю что после покупки всплывает правильный текст

        
    })
        
})
