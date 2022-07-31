document.write('<h2>Методы экземпляра объекта Contnact</h2>');
document.write(`<p>let ИмяОбъекта=new Contacts();-создать экземпляр объекта;<br>
                ИмяОбъекта.addContact()-добавить констакт;<br>
                ИмяОбъекта.showAllContacts()-вывести список всех контактов;<br>
                ИмяОбъекта.showContact()-вывести информацию об опеределнном контакте;<br></p>`)

document.write('<h2>Методы экземпляра объекта Auto</h2>');
document.write(`<p>let ИмяОбъекта=new Auto();-создать экземпляр объекта;<br>
                   ИмяОбъекта.addInfoAboutAuto()-добавить информацию про марку и номер;<br>
                   ИмяОбъекта.OnEngine()-включить двигатель;<br>
                   ИмяОбъекта.OffEngine()-выключить двигатель;<br>
                   ИмяОбъекта.checkTransmission()-выбрать передачу;<br>
                   ИмяОбъекта.traffic()-начать движение;<br>
                   ИмяОбъекта.changeSpeed()-изменить скорость;<br></p>`)

// Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
// почта), проверка введенной информации, например: проверить возраст – должен быть
// целым неотрицательным числом больше 18, вывод информации о конкретном
// контакте, вывод всех контактов.

let Contacts=function(){
    this.contactsArr=[];
    this.addContact=function(){
      
        this.contact={
            surname:prompt('Введите фамилию'),
            name:prompt('Введите имя'),
            otch:prompt('Введите отчество'),
           
        }
        let ageAdd=+prompt('Введите возраст');
        this.checkAge(ageAdd);
        let phoneAdd=prompt('Введите телефон. Пример: +38(044)555-55-55');
        this.checkPhone(phoneAdd);
        let emailAdd=prompt('Введите email. Пример: «nick@mail.com»');
        this.checkEmail(emailAdd);
        this.contactsArr.push(this.contact);
        console.log('Контакт сохранен');
    }
    this.checkPhone=function(tel){

        let phoneExp=/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/gi;       
        if(tel!=='' ){
                if(phoneExp.test(tel)){
                    this.contact.phone=tel;
                }else{
                    let correctAge;
                    
                    correctAge=confirm('Телефон введен неправильно. Желаете исправить?');
                    if(correctAge){
                        let newPhone=prompt('Введите исправленный телефон. Пример: +38(044)555-55-55');
                        this.checkPhone(newPhone);

                    }
                }      
                
    
         }
    }
    this.checkEmail=function(Email){
        let regExp=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gi;
            if(Email!==''){
                if(regExp.test(Email)){
                    this.contact.email=Email;
                }else{
                    let correctAge;
                    
                    correctAge=confirm('Email введен неправильно. Желаете исправить?');
                    if(correctAge){
                        let newEmail=prompt('Введите исправленный email. Пример: «nick@mail.com»');
                        this.checkEmail(newEmail);
                    }
                }      
                
    
            }

    }
    this.checkAge=function(Age){          
          if(Age!==undefined && Age!==0){
                if(Number.isInteger(Age) && Age>18){
                    this.contact.age=Age;
                }else{
                    let correctAge;
                    
                    switch(true){
                        case isNaN(Age):
                            correctAge=confirm('В поле возраст указано не число. Желаете исправить?');                      
                        break;
                        case !Number.isInteger(Age):
                            correctAge=confirm('Возраст не может быть дробным числом. Желаете исправить?');
                        break;
                        case Age<18:
                            correctAge=confirm('Возраст меньше 18-ти. Желаете исправить?');
                        break;
                    }
                    if(correctAge){
                        let newAge=+prompt('Введите исправленный возраст. Возраст не может быть дробным.')
                        this.checkAge(newAge);
                    }
                }
                
    
          }
    }
    this.showAllContacts=function(){
        document.write('<h2>Полный список контактов</h2>')
        for(let i=0;i<this.contactsArr.length;i++){
            document.write(`<p>Фамилия: ${this.contactsArr[i].surname}<br>Имя: ${this.contactsArr[i].name}<br>Отчетво: ${this.contactsArr[i].otch}<br>Возраст: ${this.contactsArr[i].age}<br>Телефон: ${this.contactsArr[i].phone}<br>Email: ${this.contactsArr[i].email}<br></p>`)
        }
    }
    this.showContact=function(){
        document.write('<h2>Информация о контакте</h2>');
        let checkSurname=prompt('Введите фамилию контакта, информацию о котором хотите увидеть');
        let checkName=prompt('Введите имя контакта, информацию о котором хотите увидеть');
        for(let i=0;i<this.contactsArr.length;i++){
            if(this.contactsArr[i].surname===checkSurname && this.contactsArr[i].name===checkName){
                document.write(`<p>Фамилия: ${this.contactsArr[i].surname}<br>Имя: ${this.contactsArr[i].name}<br>Отчетво: ${this.contactsArr[i].otch}<br>Возраст: ${this.contactsArr[i].age}<br>Телефон: ${this.contactsArr[i].phone}<br>Email: ${this.contactsArr[i].email}<br></p>`);
            }
        }    
    }
}


 let contact=new Contacts();
//  contact.addContact();
//  contact.addContact();
//  contact.addContact();

// console.log(contact.contactsArr);



// Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
// двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
// (ввод информации о скорости движения), расчет пройденных километров.



let Auto=function(){
    this.addInfoAboutAuto=function(){
        this.mark=prompt('Введите марку автомобиля');
        let numberAdd=prompt('Введите номер автомобиля.Пример: «г632ер150»');
        this.checkGosNumber(numberAdd);
        console.log(`Марка автомобиля ${this.mark}`);
        console.log(`Номер автомобиля ${this.numberAuto}`);
    }
    this.checkGosNumber=function(num){
        let numExp=/[а-я]\d{3}[а-я]{2}\d{2,3}/gi;
        if(num!==''){
            if(numExp.test(num)){
                this.numberAuto=num;
            }else{
                let correctAge;
                
                correctAge=confirm('Номер введен неправильно. Желаете исправить?');
                if(correctAge){
                    let newNum=prompt('Введите исправленный номер. Пример: «г632ер150»');
                    this.checkGosNumber(newNum);
                }
            }
        }else if(num===''){
            let correctAge;
                
                correctAge=confirm('Номер пустой. Желаете исправить?');
                if(correctAge){
                    let newNum=prompt('Введите исправленный номер. Пример: «г632ер150»');
                    this.checkGosNumber(newNum);
                }
        }
    }
    this.OnEngine=function(){
        this.Engine=true;
        console.log('Двигатель включен');
        this.result=0;
    }
    this.checkTransmission=function(){
        if(this.Engine){
            this.transmission=+prompt('Выберите передачу:\n1-Вперед;\n2-Назад;\n3-Нейтральная');
            
        }else{
            console.log('Двигатель выключен');
        }
    }
    this.traffic=function(){
        if(this.transmission===3 && this.Engine===true){
            alert('Включена нейтральная передача');
        }else if(this.Engine===true){
            this.Start=new Date();
            this.speed=+prompt('Введите скорость движения');
            switch(true){
                case this.transmission===1:
                    console.log('движемся вперед со скоростью '+this.speed+'км/ч');
                break;
                case this.transmission===2:
                    console.log('движемся назад со скоростью '+this.speed+'км/ч');
                break;

            }
            
           
        }else{
            alert('Не включен двигатель');
        }
        
       
    }
    this.changeSpeed=function(){
        if(this.transmission===3 && this.Engine===true){
            alert('Включена нейтральная передача');
        }else if(this.Engine===true){
            this.End=new Date();
            this.result+=Math.round(this.speed*((this.End-this.Start)/3600000));
            console.log(`Машина проехала ${this.result} км`);
            this.Start=new Date();
           
            this.speed=+prompt('Введите новую скорость движения');
            switch(true){
                case this.transmission===1:
                    console.log('движемся вперед со скоростью '+this.speed+'км/ч');
                break;
                case this.transmission===2:
                    console.log('движемся назад со скоростью '+this.speed+'км/ч');
                break;

            }
            
           
        }else{
            alert('Не включен двигатель');
        }

    }
    this.OffEngine=function(){
        if(this.transmission!==3){
            let stopEngine=confirm('Нейтральная передача не включена.Включить?');
            if(stopEngine){
                this.transmission=3;
                this.End=new Date();
                this.Engine=false;
                this.result+=Math.round(this.speed*((this.End-this.Start)/3600000));
                console.log(`Двигатель выключен. Машина проехала ${this.result} км`);
                this.speed=0;
            }
        }
        
    }
};

let auto=new Auto();
//auto.addInfoAboutAuto();
// auto.OnEngine();
// auto.checkTransmission();
// auto.traffic();
//auto.OffEngine();