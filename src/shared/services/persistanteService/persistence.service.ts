import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  set<TData>(key: string, data: TData): void {
    console.log("123 FIRE AND SET LOCAL STORAGE",)
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error(error)

      throw new Error('Error saving to local storage')
    }
  }

  get(key: string): null | string {
    try {
      const item = localStorage.getItem(key)

      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error(error)

      return null
    }
  }
}
