# clone official repository
git clone https://github.com/bitwiseshiftleft/sjcl.git
cd sjcl

# list activated components
./configure

# configure all features
./configure --with-all

# configure add only one new feature
./configure --with-codecZ85

# remove a feature
./configure --without-codecZ85

# disable compression
./configure --compress=none

# Generate sjcl.js
make
