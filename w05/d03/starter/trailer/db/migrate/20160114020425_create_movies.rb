class CreateMovies < ActiveRecord::Migration[1]
  def change
    create_table :movies do |t|
      t.string :title, null: false, index: true
      t.text :year
      t.text :poster_url
    end
  end
end
