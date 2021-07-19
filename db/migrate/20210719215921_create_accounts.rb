class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string  :acc_id, unique: true
      t.string  :balance
      t.integer :credit
      t.string  :picture
      t.string  :name_first
      t.string  :name_last
      t.string  :employer
      t.string  :email
      t.integer :phone
      t.string  :address
      t.string  :comments
      t.string  :created
      t.timestamps
    end
    add_index :accounts, :acc_id, unique: true
    add_index :accounts, :email, unique: true
    add_index :accounts, :phone, unique: true
  end
end
