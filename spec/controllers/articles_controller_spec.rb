require 'rails_helper'

RSpec.describe ArticlesController, type: :controller do
  render_views

  describe '#index' do
    let!(:article) { create(:article) }
    before { get :index, formant: :json }

    it 'responds successfully' do
      expect(response).to have_http_status(200)
    end

    it 'contains article data' do
      expect(response.body).to have_json_body([article])
    end
  end

end
