import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PesquisaDeImagens {
  constructor() {}

  generateImageURL(searchTerm: string): string {
    const API_KEY = "SUA_API_KEY";
    const searchURL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=SUA_CX_VALUE&q=${searchTerm}&searchType=image`;
    return searchURL;
  }
}
