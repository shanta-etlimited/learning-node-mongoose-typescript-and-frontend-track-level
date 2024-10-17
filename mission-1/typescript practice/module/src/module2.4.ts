{
    //generic type with interface
    interface Developer<T, X= null>{
        name: string
        computer:{
            brand: string;
            model: string;
        }
        smartWatch: T;
        bike?: X
    }

    type SamsungWatch = {
        brand: string
        price: number
    }
    const poorDeveloper: Developer<SamsungWatch> = {
        name: "shanta",
        computer: {
            brand: "Dell",
            model: "XPS"
        },
        smartWatch: {
            brand: "Samsung",
            price: 200
        }
    }

    
    interface AppleWatch {
        brand: string
        model: string
        heartTrack: boolean
        sleepTrack: boolean
    }

    interface YamahaBike {
        model: string
        engineCapacity: string
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: "shanta",
        computer: {
            brand: "Dell",
            model: "XPS"
        },
        smartWatch: {
            brand: "Apple Watch",
            model: "something",
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: "yamaha",
            engineCapacity: "100cc"
        }
    }
}