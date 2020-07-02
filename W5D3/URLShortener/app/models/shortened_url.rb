class ShortenedUrl < ApplicationRecord
    validates :user_id, :long_url, :short_url, presence: true, uniqueness: true

    def self.random_code
        loop do
            random = SecureRandom.urlsafe_base64(16)
            return random if !ShortenedUrl.exist?(short_url: random)
        end
    end
end