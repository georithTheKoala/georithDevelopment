class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                article {
                    display: flex;
                }

                .meal-picture {
                    flex-grow: 1;
                    flex-direction: row;
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
            
                .meal-info {
                    flex-grow: 5;
                    padding: 24px;
                    background-color: white;
                }
            
                .meal-info > h2 {
                    font-weight: lighter;
                    color: darkblue;
                }
            
                .meal-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1000; /* number of lines to show */
                    color: darkblue;
                    text-align: justify;
                }

                @media screen and (max-width: 1000px) {
                #content,
                aside {
                    width: 100%;
                    padding: 0;
                }

                article {
                    display: flex;
                    flex-direction: column;
                }
                }
            </style>
            <article>
                <img class="meal-picture" src="${this._meal.strMealThumb}" alt="beverages">
                <div class="meal-info">
                    <h2>${this._meal.strMeal}</h2>
                    <p>${this._meal.strInstructions}</p>
                </div>
            </article>`;
    }
 }

 customElements.define("meal-item", MealItem);