Rails.application.routes.draw do
  resources :articles, only: [:create, :update, :delete, :index, :show]
  root 'angular#index'
end
