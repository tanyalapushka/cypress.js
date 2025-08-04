import * as data from "../helpers/default_data.json"


import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"


describe('Проверка авторизации', function () {

  beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
           });

afterEach('Конец теста', function () {
         cy.get(result_page.close).should('be.visible');
        });


   it('Верный пароль и верный логин', function () {
       
        cy.get(main_page.email).type(data.login); //ввели верный логин
        cy.get(main_page.password).type(data.password);// ввели верный пароль
        cy.get(main_page.login_button).click(); //нажал войти

        cy.get(result_page.title).contains('Авторизация прошла успешно');//проверяю что после автор. содержит текст
        cy.get(result_page.title).should('be.visible'); //текст виден пользователю
        
})

it('Верный логин и неверный логин', function () {

        cy.get(main_page.email).type(data.login); //ввели верный логин
        cy.get(main_page.password).type('iLoveqastudio9');// ввели НЕверный пароль
        cy.get(main_page.login_button).click(); //нажал войти

        cy.get(result_page.title).contains('Такого логина или пароля нет');//проверяю что после автор. содержит текст
        cy.get(result_page.title).should('be.visible'); //текст виден пользователю
        
})
it('Проверка что в логине есть "@"', function () {

        cy.get(main_page.email).type('germandolnikov.ru'); //ввели логин без @
        cy.get(main_page.password).type(data.password);// ввели верный пароль
        cy.get(main_page.login_button).click(); //нажал войти

        cy.get(result_page.title).contains('Нужно исправить проблему валидации');//проверяю что после автор. содержит текст
        cy.get(result_page.title).should('be.visible'); //текст виден пользователю
        
})
it('Проверка Восстановления пароля', function () {
        cy.get(main_page.fogot_pass_btn).click();//Нажимаем восстановить пароль
        cy.get(recovery_password_page.email).type(data.login); //ввожу почту
        cy.get(recovery_password_page.send_button).click();//Нажимаем кнопку отправить код
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');//проверяю текст
        cy.get(result_page.title).should('be.visible'); //текст виден пользователю

   
        
})


it('Проверка на приведение к строчным буквам в логине', function () {
       
        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); //ввели верный логин, но с заглавными буквами
        cy.get(main_page.password).type(data.password);// ввели верный пароль
        cy.get(main_page.login_button).click(); //нажал войти

        cy.get(result_page.title).contains('Авторизация прошла успешно');//проверяю что после автор. содержит текст
        cy.get(result_page.title).should('be.visible'); //текст виден пользователю
        
})

}) 

// запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
