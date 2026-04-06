Normal Array vs Vector

Size Fixed ❌ Dynamic ✅
Resize Not possible ❌ Automatic ✅
Functions No ❌ Many built-in ✅

# vector

#include <iostream>
#include <vector>
using namespace std;

int main() {

    vector<int> arr;

    // 🔹 Add elements
    arr.push_back(10);
    arr.push_back(20);
    arr.push_back(30);

    cout << "Vector elements: ";
    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }

    // 🔹 Size of vector
    cout << "\nSize: " << arr.size();

    // 🔹 First and last element
    cout << "\nFirst: " << arr.front();
    cout << "\nLast: " << arr.back();

    // 🔹 Remove last element
    arr.pop_back();

    cout << "\nAfter pop_back: ";
    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }

    // 🔹 Clear vector
    arr.clear();

    cout << "\nSize after clear: " << arr.size();

    return 0;

}

---

# two sum

#include <iostream>
using namespace std;

// function declaration
bool twosum(int arr[], int size, int target);

int main(){

    cout<<"our array\n";
    int arr[]={0, -1, 2, -3, 1};
    int size = sizeof(arr) / sizeof(arr[0]);

    for(int i=0;i<size;i++){
        cout<<arr[i]<<" ";
    }

    int target;
    cout<<"\nenter ur target \n";
    cin>>target;

    bool result = twosum(arr, size, target);

    if(result)
        cout<<"Pair found";
    else
        cout<<"Pair not found";

    return 0;

}

bool twosum(int arr[], int size, int target){

    for (int i = 0; i < size; i++){
        for(int j = i + 1; j < size; j++){
            if (arr[i] + arr[j] == target){
               // cout<<"found";////error not corrct ans as bool retrun true or false
                return true
            }
        }
    }
    return false;

## }
