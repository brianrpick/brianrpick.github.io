Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: "pages#home"
  get '/moneywatch', to: "pages#moneywatch"
  get '/index', to: "pages#index"
  get '/experience', to: "pages#experience"
  get '/amazi', to: "pages#amazi"
  get '/todo', to: "pages#todo"
end
