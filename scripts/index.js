const buttonsWrapper = document.querySelector(".buttonsWrapper"),
      pokemonTitle = document.querySelector(".pokemonTitle"),
      featuresType = document.querySelector(".featuresType"),
      featuresHeight = document.querySelector(".featuresHeight"),
      featuresExperience = document.querySelector(".featuresExperience"),
      featuresWeight = document.querySelector(".featuresWeight"),
      abilitiesWrapper = document.querySelector(".abilitiesWrapper");

const getPokemonsList = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
  const data = await response.json();
  const pokemonsList = data.results;
  //console.log(pokemonsList);
  
  pokemonsList.forEach((poke) => {
    const name = poke.name;
    
    const newButton = document.createElement("button");
    newButton.classList.add("pokemonButton");
    newButton.innerText = name;
    newButton.dataset.id = name;
    
    newButton.addEventListener("click", async (event) => {
      const pokeId = event.target.dataset.id;
      console.log(`El poke ID es: ${pokeId}`);
      pokemonTitle.innerText = pokeId;
      
      const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
      
      const pokeData = await pokeResponse.json();
      //console.log(pokeData);
      
      const pokeType = pokeData.types;
      //console.log(pokeType);
      pokeType.forEach((types) => {
        const type = types.type;
        const typeName = type.name;
        console.log(typeName);
        const pokeTypeSpan = document.createElement("span");
        pokeTypeSpan.innerText = typeName;
        featuresType.appendChild(pokeTypeSpan);
      });

      const pokeHeight = pokeData.height;
      //console.log(pokeHeight);
      const pokeHeightSpan = document.createElement("span");
      pokeHeightSpan.innerText = pokeHeight;
      featuresHeight.appendChild(pokeHeightSpan);
      
      const pokeExperience = pokeData.base_experience;
      //console.log(pokeExperience);
      const pokeExperienceSpan = document.createElement("span");
      pokeExperienceSpan.innerText = pokeExperience;
      featuresExperience.appendChild(pokeExperienceSpan);
      
      const pokeWeight = pokeData.weight;
      //console.log(pokeWeight);
      const pokeWeightSpan = document.createElement("span");
      pokeWeightSpan.innerText = pokeWeight;
      featuresWeight.appendChild(pokeWeightSpan);
      
      const pokeAbilities = pokeData.abilities;
      //console.log(pokeAbilities);
      pokeAbilities.forEach((abilities) => {
        const ability = abilities.ability;
        const abilityName = ability.name;
        console.log(abilityName);
        const pokeAbilitySpan = document.createElement("span");
        pokeAbilitySpan.innerText = abilityName;
        abilitiesWrapper.appendChild(pokeAbilitySpan);
      });
    });
    
    buttonsWrapper.append(newButton);
  });
  //console.log(pokemonsList);
}

getPokemonsList();