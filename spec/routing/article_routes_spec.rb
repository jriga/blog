require 'rails_helper'

RSpec.describe "routing to articles", :type => :routing do
  it "routes /articles to articles#index" do
    expect(:get => "/articles").to route_to(
                                     :controller => "articles",
                                     :action => "index"
                                   )
  end

end
