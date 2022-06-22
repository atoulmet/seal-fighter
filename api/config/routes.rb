Rails.application.routes.draw do
  get "/seals", to: "seals#index"
  get "/seals/:name", to: "seals#show"

  post '/turn', to: 'turns#action'
end
