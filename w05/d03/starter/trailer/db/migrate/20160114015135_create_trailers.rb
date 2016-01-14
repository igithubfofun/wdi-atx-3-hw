class CreateTrailers < ActiveRecord::Migration
  def change
    create_table :trailers do |t|
      t.string :title, null: false, index: true
      t.text :embed_url
    end
  end
end
