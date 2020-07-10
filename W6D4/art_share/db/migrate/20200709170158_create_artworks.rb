class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title 
      t.string :image_url
      t.integer :artist_id 
    end
    add_index :artworks, :artist_id 
    add_index :artworks, [:title, :artist_id], unique: true 
  end
end
