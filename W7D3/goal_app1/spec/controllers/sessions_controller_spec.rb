require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
    let!(:user) { User.create({username: 'wakka', password: '123456'})}

    describe 'GET #new' do 
        it 'renders the new session tempalte' do 
            get :new 
            expect(response).to render_template('new')
        end
    end 

    #describe "POST #create"
end
