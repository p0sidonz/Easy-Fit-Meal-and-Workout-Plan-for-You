import React , { useState, useEffect }from 'react';
import $ from 'jquery';
import { content } from '../data/content';
import { Context } from '../context/Provider';

//functions
import dailyCalorieIntake  from '../algorithms/dailyCalorieIntake';
import getArticles from '../algorithms/getArticles';
//Components
import RenderDailyCarlorieNeed from '../components/molecules/RenderDailyCarlorieNeed';
import RenderCaloriesRemain from '../components/molecules/RenderCaloriesRemain';
import RenderArticleCardList from '../components/molecules/RenderArticleCardList';
import RandomQuoteCard from '../components/molecules/RandomQuoteCard';
import InputForm from '../components/organisms/InputForm';
import { routesArticleBar } from '../data/routes';
import { Link } from 'react-router-dom'
import { routes } from '../data/routes';

const HomePage = () => {

    const content_homePage = content.homePage;

    const {state,changeState} = React.useContext(Context);

    const [randomQuote, setRandomQuote] = useState([]);

    const [renderPopularArticles, setRenderPopularArticles] = useState(
        {
            popularMindfulnessArticles: true,
            favorites: false
        }
    );

    const onPageMenuBarClick = type => {
        type === 'popularMindfulnessArticles' ?
        setRenderPopularArticles({
            popularMindfulnessArticles: true,
            favorites: false
        }):
        setRenderPopularArticles({
            popularMindfulnessArticles: false,
            favorites: true
        })
    }

    const updateUserData = (type,data) =>{
            changeState(type,data);
    };

    useEffect(()=>{//Get goalCal
        let isMounted = true;

        if(state.userPersonalInfo.complete && state.userPersonalInfo.complete){
            let [dailyCalIntake,weeks] = dailyCalorieIntake(state);
            let data = state.calTrack;
            data.goalCal = dailyCalIntake;
            data.weeks = weeks;
            if (isMounted) changeState('calTrack',data);
        }

    },[state.userGoal]);

    const setArticles = async() => {
        let articles_homePage = await getArticles(content_homePage.pageName);
        changeState('articles_homePage',articles_homePage);
    };

    
    const setQuotes = async () => {
        let totalQuotes = []
        for( let i=0; i < 2; i++){
          let result = await $.ajax({
            url: "https://api.forismatic.com/api/1.0/",
            jsonp: "jsonp",dataType: "jsonp",data: 
            {method: "getQuote",lang: "en",format: "jsonp"}
        });
        totalQuotes.push(result)
        }
        setRandomQuote(totalQuotes);
      }
    
    
    useEffect(() =>{ //Get articles and a random quote
        setArticles();
        setQuotes();
    },[])
    

    const addItem = (item,type) => {
        let newList = [...state[type],item];
        changeState(type,newList)
      };    

    const deleteItemFavRecipe = (index,type) => {
        let newList = [...state[type]];
        newList.splice(index,1);
        changeState(type,newList);
      };
    
    const checkIfFavorite = (item,type) => {
        let isLiked = false;
      
        state.favoriteArticles.length > 0 && state.favoriteArticles.map(
          obj => { 
            if(obj.title === item.title) 
            {
              isLiked = true;
            } return isLiked;}
        );
      
        return isLiked;
    }

    const onChangeItem = (item,type) =>{
    
        let value = false;
        let index = -1;
        state.favoriteArticles.map((obj,idx) => {
        if(obj.title === item.title)
        {value = true;index=idx;}
        return null;
        });
    
        value ? deleteItemFavRecipe(index,type):addItem(item,type)
    
    };

    return (
    <div className= 'mainContainer mainContainer'>
        <div className = 'subContainer subContainer__pageInput'>
            {!state.userPersonalInfo.complete &&
                <InputForm 
                content = {content_homePage}
                state ={state}
                updateUserData = {updateUserData}
                stateType = 'userPersonalInfo'
                />
            }
            {(state.userPersonalInfo.complete && !state.userGoal.complete) &&  
            <InputForm 
                content = {content_homePage}
                state ={state}
                updateUserData = {updateUserData}
                stateType = 'userGoal'
            />}
            
            {state.userPersonalInfo.complete && state.userGoal.complete &&
            <div className= 'item item__result'>
                <RenderDailyCarlorieNeed state = {state}content = {content_homePage} />
            </div>
            }
        </div>
        <div className ='subContainer subContainer__linkToPage'>
            {routes.map((route,index) => index !== 0 && 
            <Link key={index} className = "pageMenuBar__link" to={route.link}
            ><i className= {`${route.icon} pageMenuBar__link__icon subContainer__linkToPage__icon`}/>
            <span className = "pageMenuBar__link__name"> {route.name}</span>
            </Link>)
            }
        </div>

        <div className = 'subContainer subContainer__caloriesRemain'>
            <RenderCaloriesRemain />
        </div>
        <div className = 'subContainer subContainer__randomQuotes'>
            {randomQuote &&  <RandomQuoteCard items = {randomQuote} showImage ="home"/>}
        </div>

        <div className = "subContainer subContainer__pageMenuBar">
            <div className ="pageMenuBar">
            {routesArticleBar.map((item,index)=>{
                return(
                    <div className = "pageMenuBar__link" 
                    key ={index} 
                    onClick={() => onPageMenuBarClick(item.compName)}
                    > <i className= {`${item.icon} pageMenuBar__link__icon`}/><span className = "pageMenuBar__link__name">{item.name}</span>
                    </div>)
            })
            }
            </div>
        </div>
        
        {renderPopularArticles.popularMindfulnessArticles ? 
            <div className = 'subContainer subContainer__cards'>
            <RenderArticleCardList 
            items = {state.articles_homePage}
            heading = {content_homePage.articles.heading}
            checkIfFavorite = {checkIfFavorite}
            onChangeItem ={onChangeItem}
            type ="favoriteArticles"/>
            </div>
            :
            <div className = 'subContainer subContainer__favoriteCards'>
            <RenderArticleCardList 
            items = {state.favoriteArticles}
            heading = {content_homePage.favoriteArticles.heading}
            checkIfFavorite = {checkIfFavorite}
            onChangeItem ={onChangeItem}
            type ="favoriteArticles"
            />
            </div>
        }


    </div>
    );
}

export default HomePage;

/*
            {!state.userPersonalInfo.complete &&
            <div className= 'item item__userInfo'>
                <div className = 'item__userInfo__heading'>
                    <h2 className = 'heading heading__s'>{content_homePage.userPersonalInfo.text.heading1}</h2>
                </div>
                <div className = 'item__userInfo__text'>
                     <div className = 'paragraph paragraph--dark'>{content_homePage.userPersonalInfo.text.heading2}</div>
                </div>
                <div className = 'item__userInfo__btn u-font-btn-m'>
                    <Button className = 'btn btn--green' 
                    text = {state.userPersonalInfo.complete ? 
                    content_homePage.userPersonalInfo.text.textAfter:
                    content_homePage.userPersonalInfo.text.textbtn} 
                    onClickButton = {() =>togglePopup('userPersonalInfo')}
                    />  
                    <div className= "btn__animation btn__animation">
                        <i className="caret left icon btn__animation btn__animation--arrow"></i>
                    </div>
                    
                </div>
            </div>
            }
            {
            open.userPersonalInfo &&  <UserInformationForm
                            content = {content_homePage}
                            state ={state}
                            checkInfoComplete = {checkInfoComplete}
                            />
            }
            {(state.userPersonalInfo.complete && !state.userGoal.complete) &&
                <div className= 'item item__userGoal'>
                <div className = 'item__userGoal__heading'>
                    <h2 className = 'heading heading__s'>{content_homePage.userGoal.text.heading1}</h2>
                </div>
                <div className = 'item__userGoal__text'>
                    <p className = 'paragraph paragraph--dark'>{content_homePage.userGoal.text.heading2}</p>
                </div>
                <div className = 'item__userGoal__btn u-font-btn-m'>
                    <Button className = 'btn btn--green' 
                    text = {state.userGoal.complete ? 
                    content_homePage.userGoal.text.textAfter :
                    content_homePage.userGoal.text.textbtn} 
                    onClickButton = {() => togglePopup('userGoal')}/>
                    <div className= "btn__animation btn__animation">
                        <i className="caret left icon btn__animation btn__animation--arrow"></i>
                    </div>
                </div>

                {open.userGoal &&  <UserGoalForm 
                content = {content_homePage}
                state ={state}
                checkInfoComplete = {checkInfoComplete}
                />}
            </div>
           }
*/