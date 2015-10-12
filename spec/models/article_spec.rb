require 'rails_helper'

RSpec.describe Article, type: :model do
  subject { build(:article) }

  context 'is valid' do
    it { is_expected.to be_valid }
  end

  context 'is not valid' do
    it 'when title missing' do
      expect(build(:article, title: nil)).to be_invalid
    end

    it 'when text missing' do
      expect(build(:article, text: nil)).to be_invalid
    end
  end
end
