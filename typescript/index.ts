
const getById = (id: string)=> <HTMLElement>document.getElementById(id);
//<HTMLElement>
const getByClass = (name: string) => <HTMLElement>document.getElementsByClassName(name)[0];

const logFormData = ():void =>{
   const name = (getById('name') as HTMLInputElement).value;
   const email = (getById('email') as HTMLInputElement).value;
   const message = (getById('message') as HTMLInputElement).value;

   console.log(`
        user name: ${name}
        user email: ${email}
        user message: ${message}
   `)
}

getById("submit")?.addEventListener('click' , logFormData)

getById("nav-open")?.addEventListener("click", ():any => getById("mobile-nav")!.style.display = 'block')

getById("nav-close")?.addEventListener("click", ():any => getById("mobile-nav")!.style.display = 'none')

getById("contact-us")?.addEventListener("click", ():any => getById("mobile-nav")!.style.display = 'none')

