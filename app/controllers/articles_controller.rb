class ArticlesController < ApplicationController
  def index
    articles = Article.all
    render json: articles
  end

  def create
    article = Article.create(article_params)
    render json: article, status: 201
  end

  protected
  def article_params
    params.require(:article).permit(:title, :text)
  end
end
