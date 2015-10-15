class ArticlesController < ApplicationController
  def index
    articles = Article.all
    render json: articles
  end

  def create
    article = Article.create(article_params)
    render json: article, status: 201
  end

  def show
    article = Article.find(params[:id])
    render json: article
  end

  def update
    article = Article.find(params[:id])
    article.update_attributes(article_params)
    render json: article
  end

  protected
  def article_params
    params.require(:article).permit(:title, :text)
  end
end
