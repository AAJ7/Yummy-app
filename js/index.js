async function GetData2()
                    {
                        let Data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
                        let MyData = await Data.json();
                        
                        let Container = document.createElement("div");
            Container.classList.add("container" , "m-auto" ,  "w-75" ,  "mt-5" , "text-white");
            let Row = document.createElement("div");
            Row.classList.add("row" , "text-center" , "mb-3");
            Container.append(Row);
            
            let Res="";
            for(let i = 0; i<MyData["meals"].length; ++i)
            {
                Res += `<div class="col-3 mb-4">
                <div class="main-container index-data">
                <img src="${MyData["meals"][i]["strMealThumb"]}" alt="" class = "w-100 rounded-4">
                <div class="overlay  rounded-4">
                <p class = "overlay-p text-dark">${MyData["meals"][i]["strMeal"]}</p></div>
                </div>
                </div>
                `
            }
            Row.innerHTML = Res;
            document.body.appendChild(Container);



            for (let index = 0; index < document.querySelectorAll(".index-data").length; index++)
            {
                document.querySelectorAll(".index-data")[index].addEventListener("click" , function()
                {
                    let Keyword2 = document.querySelectorAll(".index-data")[index].firstElementChild.nextElementSibling.firstElementChild.textContent;
                    console.log(Keyword2);
                    document.body.removeChild(document.body.querySelector(".container"));
                    async function GetData3()
                            {
                                        let Data3 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Keyword2}`);
                                        let MyData3 = await Data3.json();

                                        

                                        let Container = document.createElement("div");
                                        Container.classList.add("container" , "mt-5" , "me-3");
                                        let Row = document.createElement("div");
                                        Row.classList.add("row");
                                        Container.append(Row);
                                        
                                        let Res= 
                                        `
                                        <div class="col-4 text-center text-white">
                                        <img src="${MyData3["meals"][0]["strMealThumb"]}" alt="" class="w-100 rounded-5">
                                        <h2 class="mt-3">${MyData3["meals"][0]["strMeal"]}</h2>
                                        </div>
                                        <div class="col-6 text-white">
                                        
                                        <h3>Instructions</h3>
                                        <p class="mb-5">${MyData3["meals"][0]["strInstructions"]}</p>
                                        <p><span class="fw-bold fa-1x">Area</span> :${MyData3["meals"][0]["strArea"]}</p>
                                        <p><span class="fw-bold fa-1x">Category</span> : ${MyData3["meals"][0]["strCategory"]}</p>
                                        
                                        <h2 class="mt-5">Recipes</h2>
                                        <div class="d-flex flex-wrap">
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure1"]} ${MyData3["meals"][0]["strIngredient1"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure2"]} ${MyData3["meals"][0]["strIngredient2"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure3"]} ${MyData3["meals"][0]["strIngredient3"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure4"]} ${MyData3["meals"][0]["strIngredient4"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure5"]} ${MyData3["meals"][0]["strIngredient5"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure6"]} ${MyData3["meals"][0]["strIngredient6"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure7"]} ${MyData3["meals"][0]["strIngredient7"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure8"]} ${MyData3["meals"][0]["strIngredient8"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure9"]} ${MyData3["meals"][0]["strIngredient9"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure10"]} ${MyData3["meals"][0]["strIngredient10"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure11"]} ${MyData3["meals"][0]["strIngredient11"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure12"]} ${MyData3["meals"][0]["strIngredient12"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure13"]} ${MyData3["meals"][0]["strIngredient13"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure14"]} ${MyData3["meals"][0]["strIngredient14"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure15"]} ${MyData3["meals"][0]["strIngredient15"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure16"]} ${MyData3["meals"][0]["strIngredient16"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure17"]} ${MyData3["meals"][0]["strIngredient17"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure18"]} ${MyData3["meals"][0]["strIngredient18"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure18"]} ${MyData3["meals"][0]["strIngredient19"]}</p>
                                        <p class="me-3 bg-light rounded-3 p-1 text-dark">${MyData3["meals"][0]["strMeasure20"]} ${MyData3["meals"][0]["strIngredient20"]}</p>
                                        </div>
                                        
                                        <h2 class="mt-5">Tags</h2>
                                        <div class="d-flex mb-5">
                                        <span class="me-3 p-1 bg-light rounded-3 text-dark">${MyData3["meals"][0]["strTags"]}</span>
                                        <span class="me-3"></span>
                                        </div>

                                        <div class="mb-5">
                                         <a href="${MyData3["meals"][0]["strSource"]}" class="bg-light rounded-3 p-1 text-dark" target="_blank">Source</a>
                                         <a href="${MyData3["meals"][0]["strYoutube"]}" class="bg-light rounded-3 p-1 text-dark" target="_blank">Youtube</a>
                                         </div>
                                         </div>
                                        `;
                                   
                                        Row.innerHTML = Res;
                                        Res = "";
                                        document.body.appendChild(Container);    
                            }
                            GetData3();
                });
            }




            }
            GetData2();