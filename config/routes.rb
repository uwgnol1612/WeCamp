Rails.application.routes.draw do
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show]
    resources :reviews, only: [:create, :update, :destroy, :show]
    resources :bookings, only: [:create, :index, :show, :destroy] 
  end
end
