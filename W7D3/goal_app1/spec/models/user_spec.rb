require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  it {should validate_presence_of(:username)}
  it {should validate_uniqueness_of(:username)}
  # it {should validate_presence_of(:session_token)}
  # it {should validate_uniqueness_of(:session_token)}
  it {should validate_presence_of(:password_digest)}
  it {should validate_length_of(:password).is_at_least(6)}

  subject(:walker) { User.create!(
    username: 'wakka',
    password: '123456'
  )}

  describe "session token" do 
    it "assigns a session_token if none is given" do 
      expect(FactoryBot.build(:user).session_token).not_to be_nil
    end 

    it "resets a session_token on a user" do
      old_session_token = subject.session_token
      new_session_token = subject.reset_session_token!
      expect(old_session_token).not_to eq(new_session_token)
    end
  end 

  describe "password encryption" do
    it "does not save passwords to the database" do
      User.create!(username: 'wakka', password: '123456')
      wakka = User.find_by(username: 'wakka')
      expect(wakka.password).to_not be("123456")
    end
    context "it saves password properly" do
      it "encrypts the password using BCrypt" do
        expect(BCrypt::Password).to receive(:create)
        User.new(username: 'michelle', password: 'password')
      end

      it "properly sets the password reader" do 
        user = User.new(username: 'michelle', password: 'password')
        expect(user.password).to eq('password')
      end
    end
  end

  describe "finds users by credentials" do 
    context "with a valid username and password" do 
      it "should return the proper user" do 
        vanessa = User.create(username: 'vanny', password: '567890')
        user = User.find_by_credentials('vanny', '567890')

        expect(vanessa.username).to eq(user.username)
        expect(vanessa.password_digest).to eq(user.password_digest)
      end
    end

    context "with an invalid username and password" do 
      it "should return nil" do 
        michelle = User.create(username: 'michelle', password: 'password')
        user = User.find_by_credentials('michelle', 'invalidpassword')

        expect(user).to be_nil
      end 
    end
  end

end
