### Steps

Fork and clone [this repo](https://github.com/JoinCODED/REACT-SP-Pets-MobX) into your `Development` folder

### Mobx

1. Install Mobx `npm install mobx mobx-react`.
2. Create a file called `petStore` in `src`.
3. Define the `PetStore` class and inside create an empty array `pets= []`.
4. Import our data file in the store and set the initial value of the pets array to our pets data.
5. `import { makeAutoObservable } from "mobx";`.
6. Make a `constructor` that will make this a store.
7. Create a store instance and export it.

### Using the Store

Instead of getting our pets list from our `petsData` file, we will now get it from our store.

1. In `PetsList.js` import `petStore` and replace the data coming from props with our store.

### Adopting a Pet

1. We will move our adopt function to the store so we can access it anywhere in our app. Move the function to the store.
2. In `PetItem.js` import our store and replace the function that's coming from props to our function that we did in the store.

### Not Observing the Change?

1. There's a component that needs to be marked as an observer, can you know which one it is and mark it as an observer?
2. Don't forget to `import { observer } from "mobx-react";`.
