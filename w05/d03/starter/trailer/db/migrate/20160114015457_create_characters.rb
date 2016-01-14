class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :name, null: false, index: true
      t.text :photo_url
    end
  end
end
