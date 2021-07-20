class Account < ApplicationRecord
  validates :acc_id, :email, presence: true, uniqueness: true
  validates :balance, :picture, :credit, :name_first, :name_last, :employer, :address, :comments, :created, presence: true
  validates :phone, presence: true, uniqueness: true

  # has_many :account_tags_joins,
  #   foreign_key: :account_id,
  #   class_name: :AccountTag

  # has_many :account_tags,
  #   through: :account_tags_joins,
  #   source: :tags
end
