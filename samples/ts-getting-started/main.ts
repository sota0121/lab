let message: string = 'Hello, World!';
console.log(message);

const now_dt: Date = new Date()
console.log('now_dt - ')
console.log(now_dt)

const now_dt_ut: number = Date.now()
console.log('now_dt unix time - ')
console.log(now_dt_ut)

const target_date: Date = new Date(2021, (12 -1), (24 - 1))
console.log('target date - ')
console.log(target_date)
console.log(target_date.getTimezoneOffset())

const target_date_s: Date = new Date("2021-12-24")
console.log('target date - ')
console.log(target_date_s)
console.log(target_date_s.getTimezoneOffset())

