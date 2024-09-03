import numpy as np
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB

class Model: 
    
    def __init__(self, model_type="linear_regression", max_iter=1000):
        self.model_type = model_type
        self.max_iter = max_iter
        self.model = self._initialize_model()

    def _initialize_model(self):
        if self.model_type == "linear_regression":
            return LinearRegression()
        elif self.model_type == "logistic_regression":
            return LogisticRegression(max_iter=self.max_iter)
        elif self.model_type == "decision_tree":
            return DecisionTreeClassifier()
        elif self.model_type == "knn":
            return KNeighborsClassifier(n_neighbors=5)
        elif self.model_type == "naive_bayes":
            return GaussianNB()
        else:
            raise ValueError(f"Unsupported model type: {self.model_type}")

    def train_model(self, X, y):
        self.model.fit(X, y)

    def make_predictions(self, X_test):
        return self.model.predict(X_test)

    def transform_data(self, data, target_column=None):
        if target_column != None:
            X_train = np.array(data.drop(columns=[target_column]))
            y_train = np.array(data[target_column])
        else:
            X_train = np.array(data.iloc[:, :-1])
            y_train = np.array(data.iloc[:, -1])
        
        return X_train, y_train