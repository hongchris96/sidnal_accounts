class AccountTag < ApplicationRecord
  validates :account_id, :tag_id, presence: true
  validates :account_id, uniqueness: {scope: :tag_id}

  belongs_to :accounts,
    foreign_key: :account_id,
    class_name: :Accounts

  belongs_to :tags,
    foreign_key: :tag_id,
    class_name: :Tags
end
