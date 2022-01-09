// json 요소 (ex)

let CurrencyRatio = {
  USD : {
    USD : 1,
    JPY : 115.93 ,
    KRW : 1202.60,
    unit : '$'
  },

  JPE : {
    JPY : 1,
    USD : 0.0086,
    KRW : 10.37,
    unit : '¥'
  },

  KRW : {
  KRW : 1,
  USD : 0.00083,
  JPY : 0.96,
  unit : '₩'
  }
}

// dropdown에서 클릭하면 .dropbtn에 적용
let from_currency = 'USD'
let to_currency = 'USD'
let unitwords = ['','만','억','조','경'];
let splitUnit = 10000;
let from_button = document.getElementById('from-button')
let to_button = document.getElementById('to-button')
let from_unit = document.getElementById('from_unit')
let to_unit = document.getElementById('to_unit')


  // 1. 버튼을 가져온다. 32
  // 2. 버튼에 값을 바꾼다.
  // 3. 선택된 currency값을 저장
document.querySelectorAll('#from-currency-list a').forEach((list)=>
list.addEventListener('click',function(){
  from_button.textContent = this.textContent
  from_currency = this.textContent
  console.log('from_currency는',from_currency)
  convert('from')
}))

document.querySelectorAll('#to-currency-list a').forEach((list)=>
list.addEventListener('click',function(){
  to_button.textContent = this.textContent
  to_currency = this.textContent
  console.log('to_currency는',to_currency)
  convert('to')
}))

function convert(type){
  console.log('here')
  let amount = 0;
  if(type == 'from'){
    amount = document.getElementById('from-currency').value
    let convert_amount = amount * CurrencyRatio[from_currency][to_currency]
    document.getElementById('to-currency').value = convert_amount
    console.log(convert_amount)
    let unit = CurrencyRatio[from_currency].unit;
    from_unit.innerHTML = unit
  } else {
    amount = document.getElementById('to-currency').value
    let convert_amount = amount * CurrencyRatio[to_currency][from_currency]
    document.getElementById('from-currency').value = convert_amount
    console.log(convert_amount)
    let unit = CurrencyRatio[to_currency].unit;
    to_unit.innerHTML = unit
  }
}

