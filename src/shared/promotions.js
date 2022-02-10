import * as ActionTypes from './ActionTypes';

export const Promotions = (state = { isLoading: true,
                                        errMess: null,
                                        promotions: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOTIONS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.PROMOTIONS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}

        case ActionTypes.PROMOTIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
            
        default:
            return state;
      }
};

export const PROMOTIONS = [
    {
        id: 0,
        name: "Mountain Adventure",
        image: "/assets/images/breadcrumb-trail.jpg",
        featured: true,
        description: "Book a 5-day mountain trek with a seasoned outdoor guide! Fly fishing equipment and lessons provided."
    }
]