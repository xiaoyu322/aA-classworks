Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :destroy, :index, :show, :update] do
    resources :artworks, only: [:index]
    resources :comments, only: [:index]
  end
  
  resources :artworks, only: [:create, :destroy, :index, :show, :update] do 
    resources :comments, only: [:index]
  end

  resources :artwork_shares, only: [:create, :destroy]
  # get '/users/:user_id/artworks', to: "user#index"
  # get "users/:user_id/artworks", to: "artworks#index"
  resources :comments, only: [:create, :destroy, :index]
end
