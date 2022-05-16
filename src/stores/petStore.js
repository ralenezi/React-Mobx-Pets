import { makeAutoObservable } from 'mobx'
import pets from '../petsData'
class PetStore {
  pets = pets
  constructor() {
    makeAutoObservable(this)
  }

  handleAdopt = (petId) =>
    (this.pets = this.pets.filter((pet) => pet.id !== petId))
}
export default new PetStore()
