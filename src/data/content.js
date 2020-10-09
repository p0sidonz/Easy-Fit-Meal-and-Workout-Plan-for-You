export const content  = {
  homePage:{
    userPersonalInfo:{
      text: 'Step 1: Specify Information',
      textAfter: 'Change Your Information',
      image: 'https://images.unsplash.com/photo-1560169573-5ff6f7f35fe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80',
      age:{name: 'Age',value: 'age'},
      weight:{
        name: 'Weight', 
        value: 'weight', 
        units: ['kg','pounds']},
      height:{name: 'Height', 
              value: 'height', 
              units: ['cm','inches']},
      gender:{name: 'Gender',
              value: 'gender',
              options:['male', 'female']},
      activity:{
              name: 'Activity', value: 'activity', 
              options:['Little to no exercise',
                      'Light: exercise 1-3 times/week',
                      'Moderate: exercise 4-5 times/week',
                      'Active: Daily exercise or intense exercise 3-4 times/week',
                      'Very Active: intense exercise 6-7 times/week']},
      submit:{
              buttonText: 'Submit',
              displayComplete: 'Complete! You are good to go!',
              displayInComplete: 'Your personal information is incomplete.'}
    },
    userGoal: {
      text: {
        heading: 'Step 2: Specify Goal',
        headingAfter: 'Change Your Goal',
        goal:'Goal:',
        target: 'Target Weight:',
        intensity: {
          text: 'Intensity',
          options: ['Slow', 'Fast'],
        },
        suggestions:'Healthy weight-loss/gain rates are 1-2 pounds/week (0.5 to 1 kg)'},
      image:'https://culturesync.net/wp-content/uploads/2019/08/goals-setting-960x540.jpg',
      submit: {
        buttonText: 'Submit',
        displayComplete: 'Complete! You are good to go!',
        displayInComplete: 'Your personal information is incomplete.'},
      options: [
              {name:'Lose Weight', value: 'lose-weight'},
              {name:'Maintain Weight', value: 'maintain-weight'},
              {name:'Gain Weight', value: 'gain-weight'}
             ],
    },
    results:{
      text: 'Results',
      image:'https://d50b62f6164e0c4a0279-11570554cb5edae3285603e6ab25c978.ssl.cf5.rackcdn.com/html_body_blocks/images/000/007/051/original/HowToStickToYourMealPlan_en0480002f5673756c159558dce0a778f1.jpg?1524197354',
      textGoal: 'Goal : ',
      textEstimatedTime: 'Estimated Time to Reach Goal (#weeks) : ',
      textCalories: 'Your Daily Calorie Need (Kcal) : '
    }
  },
  mealPlan:{
        foodDiary:{
          text: 'Food Diary',
          options:[{name: 'Breakfast', value:'breakfast'},
                  {name: 'Lunch', value:'lunch'},
                  {name: 'Dinner', value:'dinner'},
                  {name: 'Snacks', value:'snacks'},
                  ],
          addFood:{
            text: '+ Add Food',
            placeholder: 'Search for a food',
            type: 'food',
            searchResults: 'Search Results',
            eneryUnit: 'Kcal'
          },
          
        },
        mealPlanRecipes:{
          type: 'dietPlan',
          text: "Choose a diet you'd like to follow",
          options: [
            {
              name: 'Classic Plan',text:'Just healthy balanced diet',
              parameter: 'diet', 
              value: 'balanced', 
              image:'https://3i77hz2byv5n1pii73412ndb-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/iStock-665132286-1.jpg'
            },
            {
              name: 'Immune System Booster',text:'Keeping immune system strong', 
              parameter: 'diet', 
              value: 'low-fat', 
              image:'https://www.wcrf.org/sites/default/files/Immunity-656x410.png'
            },
            {
              name: 'High Protein Diet',text:'Less carbs & more protein', 
              parameter: 'diet', 
              value: 'high-protein', 
              image:'https://static.toiimg.com/thumb/msid-67851393,width-800,height-600,resizemode-75,imgsize-1219516,pt-32,y_pad-40/67851393.jpg'
            },
            {
              name: 'Simple Plan',text:'Easy, time-saving recipes', 
              parameter: 'time', 
              value: 30, 
              image:'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vd3d3LmJyaXQuY28vbWVkaWEtbGlicmFyeS9leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGJXRm5aU0k2SW1oMGRIQnpPaTh2WVhOelpYUnpMbkppYkM1dGN5OHlNVGd5TURJd055OXZjbWxuYVc0dWFuQm5JaXdpWlhod2FYSmxjMTloZENJNk1UWXhOVE00Tnpnd01YMC44SEJaa09LdHA3cUpkcWdDRllFb2tWdWFrOGZqaXlkN2gxQ1VyalM5QmJZL2ltYWdlLmpwZz93aWR0aD05ODAiLCJleHBpcmVzX2F0IjoxNjQwNDc0MjExfQ.UEd4vbW92fsIb-phlyx-x2CGnwBRWg_N4yWWg04G_Q8/img.jpg?width=2000&height=2000'
            },
          ],
        },
        searchIngredients: 
        {
          type: 'searchIngredients',
          text: 'Select Ingredients',
          placeholder: 'Add an ingredient ...'
        },
        searchFoodPreferences: {
          text: 'Slect Food Preferences',
          type: 'searchFoodPreferences',
          options: [
            {name: 'High Protein',value: 'high-protein'},
            {name: 'High Fiber',value: 'high-fiber'},
            {name: 'Low Fat',value: 'low-fat'},
            {name: 'Low Carb',value: 'low-carb'},
            {name: 'Low Sodium',value: 'low-sodium'},
          ]
        },
        searchMeals:{
          text: 'Select Meal',
          type: 'searchMeals',
          options:[
            {name: 'Breakfast', value:'breakfast'},
            {name: 'Lunch', value:'lunch'},
            {name: 'Dinner', value:'dinner'},
            {name: 'Snacks', value:'snacks'}]
        },
        searchRecipes:{
          type: 'searchRecipes',
          button:{
            text: 'Search Recipe'
          },
          errors:{
            noSearchOption: 'Please specify search options'
          },
          results:{
            text: 'Please see the results'
          } 
        },
        favoriteRecipes:{
          results:{
            text: 'Please see the results'
          },
        },
        recipeCard:{
          units:{
            time: 'mins',
            portion: 'portions',
            calories: 'Kcal/portion'
          },
          popup:{
            ingredients: 'Ingredients:',
            preparation: 'Preparation:',
            healthLabels: 'Health Labels:'
          }, 
        }



  },
}