# %w creates an array 
require "action_view"

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    COLOR = %w(Black White Orange Gray)
    validates :color, inclusion: COLOR
    validates :sex, inclusion: {in: %w(M F) }
    validates :birth_date, :name, :description, :color, :sex, presence: true 

    def age 
        time_ago_in_words(birth_date)
    end

end


