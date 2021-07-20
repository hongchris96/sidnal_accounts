Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :accounts, only: [:index, :show, :create, :destroy]
    # resources :tags, only: [:index, :show, :create, :destroy]
    # resources :account_tags, only: [:create, :destroy, :index]
  end
end
