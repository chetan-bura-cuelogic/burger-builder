import React ,{ Component }from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Layout/Burger/Burger';
import BurgerControls from '../../components/Layout/BurgerControls/BurgerControls';
import MOdalView from '../../components/Layout/ModalView/ModalView';

class BurgerBuilder extends Component{
    state = {
        ingredients : 
            [
                {id: 1, name:"Salad", count : 0, price : 10},
                {id: 2, name:"Cheese", count : 0 , price : 10},
                {id: 3, name:"Bacon", count : 0 , price : 10},
                {id: 4, name:"Meat", count : 0 , price : 10},
            ]
        ,
        isPurchased : false,
        burgerPrice : 0.00
    }

    addIngredientHandler = (ingredientId) =>{
        const tmpIngredients = [...this.state.ingredients];
        const ingredientIndex = tmpIngredients.findIndex(p =>{
            return p.id === ingredientId;
        });
        if(tmpIngredients[ingredientIndex].count < 2){
            tmpIngredients[ingredientIndex].count = tmpIngredients[ingredientIndex].count + 1;
            const burgerPrice = this.state.burgerPrice + tmpIngredients[ingredientIndex].price;
            this.setState({ingredients:tmpIngredients,burgerPrice:burgerPrice}); 
        }
    }

    removeIngredientHandler = (ingredientId) =>{
        const tmpIngredients = [...this.state.ingredients];
        const ingredientIndex = tmpIngredients.findIndex(p =>{
            return p.id === ingredientId;
        });
        if(tmpIngredients[ingredientIndex].count > 0){
            tmpIngredients[ingredientIndex].count = tmpIngredients[ingredientIndex].count - 1;
            const burgerPrice = this.state.burgerPrice - tmpIngredients[ingredientIndex].price;
            this.setState({ingredients:tmpIngredients,burgerPrice:burgerPrice});
        }
    }

    checkOutHandler = () =>{
        console.log("Checkout");
        let isPurchased = this.state.isPurchased;
        this.setState({isPurchased:!isPurchased});
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} 
                burgerPrice = {this.state.burgerPrice}/>
                <BurgerControls 
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                checkout={this.checkOutHandler} 
                burgerPrice = {this.state.burgerPrice}
                ingredients={this.state.ingredients} 
                />
                <MOdalView 
                showModal={this.state.isPurchased}
                title="Your order is placed!!!" 
                ingredients= {this.state.ingredients} 
                burgerPrice = {this.state.burgerPrice}
                checkOutClick = {this.checkOutHandler}    
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;