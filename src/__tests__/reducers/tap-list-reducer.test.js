import tapListReducer from '../../reducers/tap-list-reducer';


describe('tap-list-reducer', () => {

  const newKeg = {
    name: "testBeer",
    brand: "testBrand",
    price: "4.00",
    alcoholContent: "6.5",
    quantity: "10",
    id: "10001"
  }  
  const startingList = [];
  const startingList2 = [{
    name: "testBeer",
    brand: "testBrand",
    price: "4.00",
    alcoholContent: "6.5",
    quantity: "1",
    id: "10001"
  }];
  

  test('Should return default state if no action is triggered', () => {    
    expect(tapListReducer(startingList, {type: null})).toEqual(startingList)
  })

  test('Should concat new keg to tap list', () => {
    const { name, brand, price, alcoholContent, quantity, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      quantity: quantity,
      id: id  
    }

    expect(tapListReducer(startingList, action)).toEqual([{
      name: "testBeer",
      brand: "testBrand",
      price: "4.00",
      alcoholContent: "6.5",
      quantity: "10",
      id: "10001"
    }])
  })

  test('Should delete a keg', () => {    
    const action = {
      type: 'DELETE_KEG',
      id: "10001"
    }
    expect(tapListReducer(startingList2, action)).toEqual([])    
  })
      
  test('Should pour a pint', () => {
    const action = {
      type: 'POUR_PINT',
      id: "10001"
    }
    expect(tapListReducer(startingList2, action)).toEqual([{
      name: "testBeer",
      brand: "testBrand",
      price: "4.00",
      alcoholContent: "6.5",
      quantity: "0",
      id: "10001"
    }])
  })
})