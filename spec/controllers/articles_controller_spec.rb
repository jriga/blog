require 'rails_helper'

RSpec.describe ArticlesController, type: :controller do
  render_views

  describe '#index' do
    let!(:article) { create(:article) }
    before { get :index }

    it 'responds successfully' do
      expect(response).to have_http_status(200)
    end

    it 'contains article data' do
      expect(response.body).to have_json_body([article])
    end
  end


  describe '#create' do
    let(:article) { attributes_for(:article).stringify_keys }
    let(:params)  { {article: article} }
    before { post :create, params }

    it 'saves new article' do
      expect(response).to have_http_status(201)
    end

    it 'contains article data' do
      expect(response.body).to have_json_body(article)
    end
  end
end
